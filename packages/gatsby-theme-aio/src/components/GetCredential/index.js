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

import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { ActionButton } from '../ActionButton';
// import { Bug, Edit } from '../Icons';
import { css } from '@emotion/react';
import {Side} from './side';
// import { getExternalLinkProps } from '../../utils';

const createCredential = async (setCredentialData) => {
  // console.log(downloads);
  const token = window.adobeIMS?.getTokenFromStorage()?.token;
  if (token) {
    const orgsResponse = await fetch("/console/api/organizations", {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token,
        "x-api-key": "stage_adobe_io"
      }
    });

    if (orgsResponse.status === 200) {
      console.log(await orgsResponse.json());
    }

    const data = {
      name: Date.now().toString(),
      platform: 'apiKey',
      description: 'created for get credential'
    };
    const response = await fetch("/console/api/organizations/224587/integrations/adobeid", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token,
        "x-api-key": "stage_adobe_io"
      },
      body: JSON.stringify(data),
    });

    if (response.status === 200) {
      const result = await response.json();
      // const data = await JSZipUtils.getBinaryContent(sampleCodeUrl);
      // const zip = await JSZip.loadAsync(data);
      // zip.remove("credential.json");
      // zip.file("credential.json", JSON.stringify(result, null, " "));
      // const blob = await zip.generateAsync({ type: "blob" });
      // saveAs(blob, 'sample.zip');
      setCredentialData(result);
    }
  }
  else {
    console.log('User not logged in');
  }
}

const GetCredential = () => {
  const [credentialData, setCredentialData] = useState(null);
  let side = "no side component";
  // let side = "no side component";
  // let content = [];
  // React.Children.forEach(children, (child) => {
  //   if (!React.isValidElement(child)) return;
  //   console.log(child.type);
  //   if (child.type === Side) {
  //     console.log('found side component');
  //     side = child;
  //   } else {
  //     content.push(child);
  //   }
  // });

  // return side;
  if (window.adobeIMS?.isSignedInUser()) {
    return (
      credentialData ? <>
        <div>
          Api Key: {credentialData.apiKey} <br />
          Credential Id: {credentialData.id}
        </div>
        {side ? (side) : (<></>)}
      </> : <div
        css={css`
          display: flex;
        `}>
        <ActionButton
          css={css`
          border-color: var(--spectrum-actionbutton-m-border-color,var(--spectrum-alias-border-color));
          color: var(--spectrum-actionbutton-m-text-color,var(--spectrum-alias-text-color));
          padding: var(--spectrum-global-dimension-size-65)    
          `}
          onClick={() => createCredential(setCredentialData)}>
          Get Credential
        </ActionButton>
        {side ? (side) : (<></>)}
      </div>
    );
  }

  return <></>;
};

GetCredential.propTypes = {
  credentialType: PropTypes.string
}

GetCredential.Side = Side;

export { GetCredential };
