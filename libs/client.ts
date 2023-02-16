import { createClient } from 'microcms-js-sdk';

import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSDate,
 } from "microcms-js-sdk";

 export type Blog = {
  id: string;
  title: string;
  content: string;
  eyecatch?: MicroCMSImage;
 } & MicroCMSDate;
 
 export type BlogResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Blog[];
 };

export const client = createClient({
  serviceDomain: 'blogpage',  // service-domain は XXXX.microcms.io の XXXX 部分
  apiKey: 'ngw9hGoPQtLQsupSef4W0SKiSFFv92G1WnP0',
});

