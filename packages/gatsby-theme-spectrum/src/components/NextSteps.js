/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import React, { useContext } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { css } from '@emotion/core';
import { findSelectedPageSiblings } from './utils';
import { Heading4 } from './Heading4';
import { View } from '@react-spectrum/view';
import '@spectrum-css/typography';
import '@spectrum-css/link';
import Context from './Context';
import Document from '@spectrum-icons/workflow/Document';

export const NextSteps = () => {
  const { location, siteMetadata } = useContext(Context);
  const selectedPageSiblings = findSelectedPageSiblings(location.pathname, siteMetadata.subPages);

  return selectedPageSiblings.length > 0 ? (
    <View elementType="nav" marginTop="size-800">
      <Heading4>Next steps</Heading4>
      <ul
        className="spectrum-Body--M"
        css={css`
          list-style: none;
          padding: 0;
        `}>
        {selectedPageSiblings.splice(1).map((page, index) => (
          <li
            key={index}
            css={css`
              margin-top: var(--spectrum-global-dimension-static-size-150);
            `}>
            <GatsbyLink to={page.path} className="spectrum-Link spectrum-Link--quiet">
              <Document size="XS" />
              <View elementType="span" marginStart="size-100">
                {page.title}
              </View>
            </GatsbyLink>
          </li>
        ))}
      </ul>
    </View>
  ) : null;
};
