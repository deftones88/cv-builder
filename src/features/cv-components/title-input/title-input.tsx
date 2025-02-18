import { createElement, JSX } from 'react';
import { InputVariants } from './title-input.types';

type TitleInputProps = {
  variant?: InputVariants;
  title?: string;
};

export const TitleInput = ({
  variant = 'h3',
  title = 'Sample Title',
}: TitleInputProps) => {
  const tagName: Record<InputVariants, keyof JSX.IntrinsicElements> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    p: 'p',
    blockquote: 'blockquote',
    Lead: 'p',
    Large: 'div',
    Small: 'small',
    Muted: 'p',
  };
  const styles: Record<InputVariants, string> = {
    h1: 'text-4xl font-bold tracking-wide lg:text-5xl mb-6',
    h2: 'text-3xl font-semibold tracking-wide border-b pb-2 mb-4',
    h3: 'text-2xl font-semibold tracking-wide mb-4',
    h4: 'text-xl font-semibold tracking-wide mb-3',
    p: 'leading-7 mt-6',
    blockquote: 'mt-6 border-l-2 pl-6 italic',
    Lead: 'text-xl text-gray-600',
    Large: 'text-lg font-semibold',
    Small: 'text-sm font-medium',
    Muted: 'text-sm text-gray-500',
  };

  return createElement(tagName[variant], { className: styles[variant] }, title);
};
