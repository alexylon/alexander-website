import {FC, memo} from 'react';

import Icon, {IconProps} from './Icon';

const MastodonIcon: FC<IconProps> = memo(props => (
    <Icon {...props}>
        <svg clipRule="evenodd" fillRule="evenodd" imageRendering="optimizeQuality" shapeRendering="geometricPrecision" textRendering="geometricPrecision" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M105 0h302c57.928.155 104.845 47.072 105 104.996V407c-.155 57.926-47.072 104.844-104.996 104.998L105 512C47.074 511.844.156 464.926.002 407.003L0 105C.156 47.072 47.074.155 104.997 0H105zm294.68 169.996c-4.462-33.167-33.369-59.307-67.639-64.37-5.782-.857-27.685-3.972-78.429-3.972h-.378c-50.757 0-61.645 3.115-67.427 3.972-33.314 4.922-63.738 28.409-71.118 61.97-3.551 16.527-3.93 34.852-3.27 51.659.941 24.105 1.122 48.166 3.312 72.172a339.46 339.46 0 007.901 47.34c7.015 28.76 35.418 52.695 63.245 62.461a169.629 169.629 0 0092.531 4.883 135.501 135.501 0 0010.006-2.735c7.464-2.372 16.208-5.024 22.636-9.683a.719.719 0 00.293-.56V369.87a.675.675 0 00-.263-.53.68.68 0 00-.578-.13 256.385 256.385 0 01-60.046 7.017c-34.802 0-44.161-16.513-46.84-23.387a72.467 72.467 0 01-4.071-18.437.643.643 0 01.057-.309.672.672 0 01.784-.379 251.589 251.589 0 0059.064 7.016c4.785 0 9.557 0 14.341-.129 20.011-.559 41.104-1.584 60.789-5.429.493-.097.984-.182 1.405-.307 31.054-5.965 60.608-24.68 63.61-72.075.111-1.866.394-19.543.394-21.478.013-6.581 2.117-46.68-.309-71.317zm-49.97 37.265v82.399h-32.654v-79.972c0-16.837-7.017-25.424-21.288-25.424-15.691 0-23.549 10.159-23.549 30.22v43.777h-32.455v-43.777c0-20.061-7.874-30.22-23.562-30.22-14.188 0-21.274 8.587-21.274 25.424v79.972h-32.639v-82.399c0-16.837 4.298-30.213 12.896-40.128 8.867-9.891 20.501-14.971 34.94-14.971 16.713 0 29.342 6.426 37.762 19.264l8.127 13.638 8.138-13.638c8.419-12.838 21.049-19.264 37.733-19.264 14.426 0 26.059 5.08 34.956 14.971 8.589 9.906 12.878 23.282 12.869 40.128z"/></svg>
    </Icon>
));

export default MastodonIcon;