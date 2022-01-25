import axios, { AxiosResponse } from 'axios';
import cn from 'classnames';
import React, { useEffect, useState } from 'react';

import Link from './Link';

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
    return 'tw-text-red-500 tw-border-red-500';
  }
  if (score < 0.9) {
    return 'tw-text-yellow-500 tw-border-yellow-500';
  }
  return 'tw-text-green-500 tw-border-green-500';
};

const LighthouseScore = ({ speedlifyUrl, hash }: { speedlifyUrl: string; hash: string }) => {
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
    <Link href={speedlifyUrl} className="tw-flex tw-gap-x-2 tw-select-none tw-font-semibold">
      {[data.performance, data.accessibility, data.bestPractices, data.seo].map((value, index) => {
        return (
          <div
            key={index.toString()}
            className={cn(
              'tw-w-8 tw-h-8 tw-border-2 tw-rounded-full tw-flex tw-justify-center tw-items-center tw-text-xs',
              scoreColor(value)
            )}
          >
            {value * 100}
          </div>
        );
      })}
    </Link>
  );
};

export default LighthouseScore;
