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
  image?: string;
  rounded?: boolean;
};

export const ImgPlaceholder = ({
  ratio = '2/3',
  size = 'sm',
  image = undefined,
  rounded = false,
}: ImgPlaceholderProps) => {
  // const [image, setImage] = useState<string | null>(null);
  // const inputRef = useRef<HTMLInputElement>(null);

  // const handleFile = (file: File) => {
  //   if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
  //     alert('지원되지 않는 파일 형식입니다.');
  //     return;
  //   }
  //   const reader = new FileReader();
  //   reader.onloadend = () => {
  //     setImage(reader.result as string);
  //   };
  //   reader.readAsDataURL(file);
  // };

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   if (e.target.files && e.target.files[0]) {
  //     handleFile(e.target.files[0]);
  //   }
  // };
  // const handleDelete = () => {
  //   setImage(null);
  //   if (inputRef.current) {
  //     inputRef.current.value = '';
  //   }
  // };
  // const onButtonClick = () => {
  //   inputRef.current?.click();
  // };
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
                src={image}
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
                accept={ACCEPTED_FILE_TYPES.join(',')}
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
