import test from 'ava';

import { min , max , get64 } from '../../src' ;

function macro (t, input, expected) {
	const b = get64(...expected);
	t.deepEqual(input, b);
}

macro.title = (providedTitle, input, expected) => `${providedTitle} ${input} === ${expected}`.trim();

test(macro, min, [0x00000000, 0x00000000]);
test(macro, max, [0xFFFFFFFF, 0xFFFFFFFF]);
