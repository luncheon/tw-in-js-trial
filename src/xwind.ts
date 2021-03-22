import xw from 'xwind/lib/macro'

const bg = "bg-red-100";

const className1 = xw`text-green-200 ${bg}`;
const className2 = xw("text-green-200", bg);
