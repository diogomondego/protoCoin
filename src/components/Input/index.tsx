import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react';
import posed from 'react-native-pose';

import { TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useField } from '@unform/core';

import {
  Container,
  IconContainer,
  TextInput,
} from './styles';
import colors from '../../utils/colors';

const Label = posed.Text({
  active: { y: -10 },
  inactive: { y: 5 },
});

interface InputProps extends TextInputProps {
  name: string;
  label: string;
  fieldIsFilled?: boolean;
  width?: number;
  background?: string;
  height?: number;
  icon?: keyof typeof Feather.glyphMap;
  inputMaskType:
  | 'normal'
}

interface InputValueReference {
  value: string | undefined;
}

interface InputRef {
  focus(): void;
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  {
    name,
    label,
    background,
    width,
    height,
    inputMaskType,
    defaultValue: inputDefaultValue,
    onChangeText,
    icon,
    ...rest
  },
  ref,
) => {
  const inputElementRef = useRef<any>(null);
  const { registerField, defaultValue, fieldName, error } = useField(name);
  const inputValueRef = useRef<InputValueReference>({
    value: inputDefaultValue,
  });

  const [isFocused, setIsFocused] = useState(false);
  const [isErrored, setIsErrored] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [activeLabel, setActiveLabel] = useState('inactive');

  const handleInputFocus = useCallback(() => {
    setActiveLabel('active');
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsErrored(true);
    setIsFilled(!!inputValueRef.current.value);
    if (inputValueRef.current.value) {
      setActiveLabel('active');
    } else {
      setActiveLabel('inactive');
    }
  }, []);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
    });
    inputDefaultValue && setActiveLabel('active');
  }, [fieldName, registerField, inputDefaultValue]);

  return (
    <Container
      isFocused={isFocused}
      isErrored={!!error}
      isFilled={isFilled}
      width={width}
      height={height}
      background={background}
    >
      <Label
        style={{
          position: 'absolute',
          left: 15,
          top: 10,
          color: colors.gray_400,
        }}
        pose={activeLabel}
      >
        {label}
      </Label>

      {inputMaskType === 'normal' && (
        <TextInput
          ref={inputElementRef}
          keyboardType={'default'}
          defaultValue={inputDefaultValue}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChangeText={value => {
            inputValueRef.current.value = value;
            onChangeText?.(value);
          }}
          style={{
            width: icon ? '90%' : '100%'
          }}
          {...rest}
        />
      )}

      {icon && 
        <IconContainer>
          <Feather name={icon} size={16} color={colors.gray_400} />
        </IconContainer>
      }
    </Container>
  );
};

export default forwardRef(Input);
