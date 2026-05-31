import React from 'react';
import { HeadingVariant } from '@shared-constants/enum';
import { CustomHeadingProps } from '@shared-types/components';
import { splitTextByNewLine } from '@shared-utils/helpers';

const CustomHeading: React.FC<CustomHeadingProps> = ({
  variant = HeadingVariant.VERTICAL,
  title,
  spanText,
  description,
  titleClassName = '',
  spanClassName = '',
  details = '',
  descriptionClassName = '',
  containerClassName = '',
  className = '',
}) => {
  const isHorizontal = variant === HeadingVariant.HORIZONTAL;

  const renderTextWithBreaks = (text?: string) => {
    const lines = splitTextByNewLine(text);
    return lines.map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < lines.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div className={`h-max ${containerClassName} flex items-center px-4 sm:px-6 md:px-12`}>
      <div
        className={`w-full ${className} ${
          isHorizontal ? 'flex flex-col md:flex-row md:items-start' : 'flex flex-col'
        }`}
      >
        {/* Left: label — fixed narrow width */}
        {isHorizontal && description && (
          <div
            className={`mb-4 md:mb-0 md:w-[22%] shrink-0 text-sm sm:text-base leading-relaxed text-gray-500 ${descriptionClassName}`}
          >
            {renderTextWithBreaks(description)}
          </div>
        )}

        {/* Center: Main heading — bg-green-400 for debug, takes all remaining space */}
        <div className={`${isHorizontal ? 'flex-1 min-w-0' : ''}`}>
          <h1
            className={
              titleClassName ||
              'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight m-0'
            }
          >
            {renderTextWithBreaks(title)}
            {spanText && (
              <>
                {' '}
                <span className={spanClassName || 'font-normal text-gray-500'}>
                  {renderTextWithBreaks(spanText)}
                </span>
              </>
            )}
          </h1>
        </div>

        {/* Right: details — fixed narrow width */}
        {isHorizontal && details && (
          <div className="mt-4 md:mt-0 md:w-[18%] shrink-0 md:pl-8">
            <p className="text-md leading-tight text-gray-500 m-0">{details}</p>
          </div>
        )}

        {/* Vertical description */}
        {!isHorizontal && description && (
          <p
            className={
              descriptionClassName || 'text-base sm:text-lg leading-relaxed m-0 mt-4 sm:mt-6'
            }
          >
            {renderTextWithBreaks(description)}
          </p>
        )}

        {/* Vertical details fallback */}
        {!isHorizontal && details && (
          <p className="text-sm sm:text-base leading-relaxed text-gray-400 mt-4 m-0">{details}</p>
        )}
      </div>
    </div>
  );
};

export default CustomHeading;
