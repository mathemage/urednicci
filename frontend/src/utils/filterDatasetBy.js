import { compose, filter, where } from 'ramda';

export default (key, filter) => compose(filter(where({ [key]: filter })));
