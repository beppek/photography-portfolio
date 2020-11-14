import { useState, useEffect } from 'react';
import {
  CMSContent,
  CMSContentType,
  Page,
  Post,
  CMSGetParam,
} from '../lib/cms/cms-types';
import { cmsFactory as cms } from '../lib/cms/cms';

type Props = CMSGetParam & {
  initialData: CMSContent;
  contentType: CMSContentType;
  token: string;
  preview: boolean;
};

export function useContentSubscribe({
  initialData,
  contentType,
  slug,
  id,
  token,
  preview,
}: Props): Post | Page {
  const [content, setContent] = useState(initialData);
  const [latestUpdate, setLatestUpdate] = useState(new Date());

  const handleUpdate = (update: { result?: CMSContent }) => {
    if (!update.result) {
      setContent(initialData);
      setLatestUpdate(new Date());
      return;
    }
    const currentUpdate = new Date(update.result._updatedAt);
    if (currentUpdate > latestUpdate) {
      setLatestUpdate(currentUpdate);
      setContent(update.result);
    }
  };

  useEffect(() => {
    if (preview) {
      const subscription = cms({ preview, token }).subscribeToType(
        { type: contentType, slug, id },
        handleUpdate,
      );
      return function cleanUp() {
        subscription.unsubscribe();
      };
    }
  }, []);

  return content as Post | Page;
}
