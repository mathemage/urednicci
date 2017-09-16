import { compose, last, split } from 'ramda';

export default compose(last, split('/'));
