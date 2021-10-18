import axios, { AxiosResponse } from 'axios';
import cn from 'classnames';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface Lighthouse {
  version: string;
  performance: number;
  accessibility: number;
  bestPractices: number;
  seo: number;
  total: number;
}

const scoreColor = (score: number) => {
  if (score < 0.5) {
    return 'tw-text-red-500 tw-border-red-500 hover:tw-text-red-700 hover:tw-border-red-700';
  }
  if (score < 0.9) {
    return 'tw-text-yellow-500 tw-border-yellow-500 hover:tw-text-yellow-700 hover:tw-border-yellow-700';
  }
  return 'tw-text-green-500 tw-border-green-500 hover:tw-text-green-700 hover:tw-border-green-700';
};

const SpeedlifyScore = ({ speedlifyUrl, hash }: { speedlifyUrl: string; hash: string }) => {
  const [data, setData] = useState<Lighthouse>({
    version: '',
    performance: 1,
    accessibility: 1,
    bestPractices: 1,
    seo: 1,
    total: 1
  });
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get<never, AxiosResponse<{ lighthouse: Lighthouse }>>(
        `${speedlifyUrl}/api/${hash}.json`
      );
      setData(res.data.lighthouse);
    };
    getData();
  }, [speedlifyUrl, hash]);
  return (
    <div className="tw-flex tw-justify-center tw-items-center tw-flex-wrap">
      <div className="tw-flex tw-justify-center tw-items-center tw-flex-nowrap">
        <div className="tw-w-6 tw-h-6 tw-relative tw-flex-shrink-0">
          <Image src="/static/images/lighthouse-logo.svg" alt="" layout="fill" />
        </div>
        <span className="tw-ml-2 tw-font-medium tw-cursor-pointer tw-break-words tw-overflow-ellipsis">
          <a
            className="tw-text-gray-800 dark:tw-text-gray-200 tw-font-medium hover:tw-text-blue-800 dark:hover:tw-text-blue-600 tw-hidden sm:tw-inline-block"
            href={speedlifyUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            Lighthouse Score
          </a>
        </span>
      </div>
      <span className="tw-mx-2 tw-text-gray-500 dark:tw-text-gray-300 tw-hidden sm:tw-inline-block">
        –
      </span>
      <a href={speedlifyUrl} rel="noopener noreferrer" target="_blank">
        <div className="tw-w-max tw-font-semibold tw-text-xs tw-grid tw-grid-flow-col tw-gap-2 tw-break-normal tw-max-w-full tw-cursor-pointer">
          {[data.performance, data.accessibility, data.bestPractices, data.seo].map(
            (value, index) => {
              return (
                <div
                  key={index.toString()}
                  className={cn(
                    'tw-w-7 tw-h-7 tw-border tw-rounded-full tw-flex tw-justify-center tw-items-center',
                    scoreColor(value)
                  )}
                >
                  {value * 100}
                </div>
              );
            }
          )}
        </div>
      </a>
    </div>
  );
};

export default SpeedlifyScore;
