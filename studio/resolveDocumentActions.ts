import defaultResolve, {
  DeleteAction,
} from 'part:@sanity/base/document-actions';
import { DocumentActionsProps } from './common/types';

export default function resolveDocumentActions(props: DocumentActionsProps) {
  return ['siteSettings'].includes(props.id)
    ? defaultResolve(props)
        .map((action: Function) => (action !== DeleteAction ? action : false))
        .filter(Boolean)
    : defaultResolve(props);
}
