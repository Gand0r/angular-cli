/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import { schema } from '@angular-devkit/core';
import { htmlSelectorFormat } from './html-selector';
import { pathFormat } from './path';

export { htmlSelectorFormat } from './html-selector';
export { pathFormat } from './path';

export const standardFormats: schema.SchemaFormat[] = [htmlSelectorFormat, pathFormat];
