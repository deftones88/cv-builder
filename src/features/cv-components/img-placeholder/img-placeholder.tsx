import { cn } from '@shared/lib/utils';
import { ImageUpIcon } from 'lucide-react';
import {
  AspectRatioClasses,
  AspectRatioWHClasses,
} from './img-placeholder.constants';
import { AspectRatio, UploaderSize } from './img-placeholder.types';

type ImgPlaceholderProps = {
  ratio?: AspectRatio;
  size?: UploaderSize;
  image?: File | undefined;
  rounded?: boolean;
};

export const ImgPlaceholder = ({
  ratio = '2/3',
  size = 'sm',
  image = undefined,
  rounded = false,
}: ImgPlaceholderProps) => {
  return (
    <div
      className={cn('w-full mx-auto', AspectRatioWHClasses[`${ratio}${size}`])}
    >
      <div
        className={cn(
          'relative w-full',
          AspectRatioClasses[ratio],
          rounded && 'rounded-lg',
          !image && 'rounded-lg border-2 border-dashed border-gray-300'
        )}
      >
        <div className='absolute inset-0 flex flex-col items-center justify-center'>
          {image ? (
            <>
              <img
                src={URL.createObjectURL(image)}
                alt='image preview'
                className='w-full h-full object-cover'
              />
              {/* <Button
                size='icon'
                onClick={handleDelete}
                className='absolute top-2 right-2 p-1 bg-opacity-50 rounded-full bg-gray-400'
                aria-label='Delete image'
              >
                <X className='w-5 h-5 text-white' />
              </Button> */}
            </>
          ) : (
            <>
              {/* <div className='mb-4'> */}
              <ImageUpIcon className='w-12 h-12 text-gray-400' />
              {/* </div> */}
              {/* <Button onClick={onButtonClick}>upload image</Button>
              <input
                ref={inputRef}
                type='file'
                className='hidden'
                accept='image/*'
                onChange={handleChange}
              />
              <p className='mt-2 text-xs text-gray-500'>PNG, JPG, GIF</p> */}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
