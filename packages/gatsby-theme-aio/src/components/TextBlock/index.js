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

import React, { cloneElement, useEffect, useState } from "react";
import { css } from "@emotion/react";
import { HeroButtons } from "../Hero";
import { Media } from "../Media";
import PropTypes from "prop-types";
import {
  layoutColumns,
  DESKTOP_SCREEN_WIDTH,
  TABLET_SCREEN_WIDTH
} from "../../utils";
import classNames from "classnames";
import "@spectrum-css/typography";

const counter = {
  2: 0,
  3: 0,
  4: 0,
};

const MIN_TABLET_SCREEN_WIDTH = '1023px'
const alignMapping = ["margin-left: 0;", "margin-right: 0;"];

const mediaCSS = css`
  & {
    display: inline;
    width: ${layoutColumns(6)};
    box-sizing: border-box;
    padding: var(--spectrum-global-dimension-size-200);

    @media screen and (max-width: ${TABLET_SCREEN_WIDTH}) {
      display: block;
      width: 100%;
    }
  }
`;

const Icons = ({ icons, isCentered }) =>
  icons
    ? cloneElement(icons, {
        css: css`
          list-style: none;
          padding: 0;
          margin-bottom: var(--spectrum-global-dimension-size-400) !important;
          display: flex;
          gap:3%;
          justify-content: ${isCentered ? "center" : "flex-start"};

          & li {
            display: flex;
            border-right: 1px solid var(--spectrum-global-color-gray-300);
            height: var(--spectrum-global-dimension-size-600);
            margin-right: var(--spectrum-global-dimension-size-150);
          }

          & li:last-of-type {
            padding-right: 0;
            border-right: none;
          }

          .gatsby-resp-image-wrapper {
            position: relative;
            width: var(--spectrum-global-dimension-size-800) !important;
            margin:0 !important;
          }

          .gatsby-resp-image-image {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            object-fit: contain;
          }
        `,
    })
    : null;

const Texts = ({ texts }) => {
  const textKeys = Object.keys(texts).filter((key) => key.startsWith("text"));
  return textKeys.map((textKey) => texts[textKey]);
};

const Links = ({ links, isCentered, isLinksGroups = false }) =>
  links
    ? cloneElement(links, {
      css: css`
          list-style: none;
          padding: 0;
          display: flex;
          justify-content: ${isCentered ? "center" : "flex-start"};
          ${!isLinksGroups ? "" : "flex-wrap: wrap;"}
          margin-top: ${isCentered || isLinksGroups
          ? "var(--spectrum-global-dimension-size-200) !important;"
          : "var(--spectrum-global-dimension-size-600) !important;"};
                        & li {
                            display: flex;
                            align-items: center;
            ${isLinksGroups
          ? `border-radius: 10px; 
                        border:solid 1.8px;
                        margin-right: var(--spectrum-global-dimension-size-200);
                        height: var(--spectrum-global-dimension-size-300);
                        margin-top: var(--spectrum-global-dimension-size-100);
                        background-color: #F7F7F7;
                        `
          : "height: var(--spectrum-global-dimension-size-400)"};
                        }

                        & li a {
                            white-space: nowrap;           
            ${isLinksGroups
          ? `margin: var(--spectrum-global-dimension-size-100); 
                       color: currentColor;
                       text-decoration: none;
                       font-size: var(--spectrum-global-dimension-size-175);`
          : "margin-right: var(--spectrum-global-dimension-size-600);"};
                        }

                        & li:last-of-type a {
                            margin-right: ${isLinksGroups ? "var(--spectrum-global-dimension-size-100)" : "0"}
                        }

                        & li:hover{
            ${isLinksGroups ?
          `background-color: var(--spectrum-button-primary-m-background-color-hover, var(--spectrum-global-color-gray-800));
                     border-color: var(--spectrum-button-primary-m-border-color-hover, var(--spectrum-global-color-gray-800));           
                     color: var(--spectrum-button-primary-m-text-color-hover, var(--spectrum-global-color-gray-50));`
          : ""}
                    }        
                    & li:hover a{
                        ${isLinksGroups ? `
                        color: var(--spectrum-button-primary-m-text-color-hover, var(--spectrum-global-color-gray-50));
                        text-decoration: none;`
          : ""}
                    }

                    .gatsby-resp-image-wrapper {
                        max-width: none !important;
                        width: 100% !important;
                        height: 100% !important;
                    }

                    .gatsby-resp-image-wrapper {
                        width: var(--spectrum-global-dimension-size-400) !important;
                        margin-left: 0 !important;
                        margin-right: var(--spectrum-global-dimension-size-150) !important;
                    }

                    .gatsby-resp-image-image {
                        object-fit: contain;
                    }
                    
                    @media screen and (max-width: ${TABLET_SCREEN_WIDTH}) {
                        flex-direction: ${isLinksGroups ? "initial" : "column"};
                        align-items: ${isCentered ? "center" : "left"};          

                        li {
                        margin-top: var(--spectrum-global-dimension-size-100);              
                        }

                        li a {
                        ${isLinksGroups
          ? "font-size: var(--spectrum-global-dimension-size-130);` "
          : `margin-right: 0;`
        }
                        }
                    }

                    @media screen and (max-width: 767px) {
                        ${isLinksGroups ? `width: min-content` : ""}
                    }
                    `,
    })
    : null;

const TextBlock = ({
  className,
  heading,
  subHeading,
  links,
  buttons,
  linksGroups,
  icons,
  image,
  assetImg,
  video,
  theme = "lightest",
  width = "100%",
  isCentered = false,
  primaryOutline = false,
  headerElementType = "h3",
  imageOnly = false,
  imgWidth = "50%",
  isPrimaryBtn = false,
  variantsTypePrimary = 'accent',
  variantsTypeSecondary = 'secondary',
  variantStyleFill = "fill",
  variantStyleOutline = "outline",
  hasCodeBlock = false,
  homeZigZag = false,
  isbuttonGroups = false,
  videoUrl,
  position = "left",
  ...props
}) => {

  const Element = headerElementType;

  let initColumns = 100 / parseFloat(width);

  if (width === "33%") {
    width = `${(100 / 3).toFixed(2)}%`;
    initColumns = 3;
  }

  const [columns] = useState(initColumns);

  useEffect(() => {
    return () => {
      if (typeof counter[columns] !== "undefined") {
        counter[columns]--;
      }
    };
  }, [columns]);

  if (width !== "100%") {
    isCentered = true;
  }

  if (isCentered) {
    let blockWidth = "";
    let extraMargin = "";

    if (typeof counter[columns] !== "undefined") {
      counter[columns]++;
    }

    if (columns === 1) {
      blockWidth = `max-width: ${layoutColumns(6)};`;
    } else if (columns >= 3) {
      blockWidth = "max-width: var(--spectrum-global-dimension-size-5000);";
    } else {
      blockWidth = "max-width: var(--spectrum-global-dimension-size-4600);";
      extraMargin = alignMapping[counter[columns] % columns];
    }


    return (
      <>
        <section
          className={classNames(className, `spectrum--${theme}`)}
          css={css`
                    display: table-cell;
                    width: ${width.replace("%", "vw")};
                    background: var(--spectrum-global-color-gray-100);
                    padding: var(--spectrum-global-dimension-size-1000) 0;

                    @media screen and (max-width: ${TABLET_SCREEN_WIDTH}) {
                    display: block;
                    width: 100%;
                    }
                    `}
        >
          <div
            css={css`
                        ${blockWidth}
                        padding: 0 var(--spectrum-global-dimension-size-400);
                        margin: auto;
                        ${extraMargin}

                        @media screen and (max-width: ${TABLET_SCREEN_WIDTH}) {
                            max-width: none;

                            margin: auto;
                        }
                        `}
          >
            <Icons icons={icons} isCentered={isCentered} />

            {image &&
              cloneElement(image, {
                css: css`
                                height: var(--spectrum-global-dimension-size-1000);
                                margin-top: 0;
                                margin-bottom: var(--spectrum-global-dimension-size-300);

                                .gatsby-resp-image-wrapper {
                                    position: relative;
                                    max-width: none !important;
                                    width: 100% !important;
                                    height: 100% !important;
                                }

                                .gatsby-resp-image-image {
                                    position: absolute;
                                    top: 0;
                                    left: 0;
                                    height: 100%;
                                    object-fit: contain;
                                }
                                `,
              })}

            {assetImg &&
              <div className={assetImg?.props?.children} />}

            {heading && (
              <Element
                className="spectrum-Heading spectrum-Heading--sizeM"
                css={css`
                                    margin-bottom: var(
                                        --spectrum-global-dimension-size-200
                                    ) !important;

                                    & ~ p {
                                        margin-top: 0;
                                        margin-bottom: 0 !important;
                                    }
                                    `}
              >
                {heading.props.children}
              </Element>
            )}
            {subHeading && (
              <h3
                className="spectrum-Heading spectrum-Heading--sizeM"
                css={css`
                                font-size: var(
                                    --spectrum-global-dimension-size-225
                                ) !important;
                                margin-bottom: var(
                                    --spectrum-global-dimension-size-200
                                ) !important;

                                & ~ p {
                                    margin-top: 0;
                                    margin-bottom: 0 !important;
                                }
                                `}
              >
                {subHeading.props.children}
              </h3>
            )}

            <Texts texts={props} />

            <HeroButtons
              buttons={buttons}
              styles={[variantStyleFill, variantStyleOutline]}
              variants={[variantsTypePrimary, variantsTypeSecondary]}
              css={css`
                            margin-top: var(--spectrum-global-dimension-size-150);
                            margin-bottom: var(--spectrum-global-dimension-size-150);
                            justify-content: center;
                        `}
            />

            <Links links={links} isCentered={isCentered} />

            <Media css={mediaCSS} video={video} />

            {videoUrl &&
              <video loop="true" muted="true" autoPlay preload="metadata" playsInline css={css`
                            display: inline;
                            width: ${layoutColumns(4)};
                            box-sizing: border-box;
                            padding: var(--spectrum-global-dimension-size-200);
                        
                            @media screen and (max-width: ${TABLET_SCREEN_WIDTH}) {
                              display: block;
                              width: 100%;
                            }
                          }
                            `}>
                <source src={videoUrl} type="video/mp4" />
              </video>}

          </div>
        </section>
        {width === "100%" ||
          (typeof counter[columns] !== "undefined" &&
            counter[columns] % columns === 0) ? (
          <div aria-hidden="true" />
        ) : null}
      </>
    );
  } else {

    return (
      <section
        className={classNames(className, `spectrum--${theme}`)}
        css={css`
                width: 100%;
                background: var(--spectrum-global-color-gray-100);
                `}
      >
        <div
          css={css`
                    box-sizing: border-box;
                    margin: auto;
                    padding: var(--spectrum-global-dimension-size-1000) 0;

                    @media screen and (max-width: ${DESKTOP_SCREEN_WIDTH}) {
                    width: 100%;

                    // & > div {
                    //   flex-direction: column !important;
                    // }
                    }
                `}
        >
          <div
            css={css`
                        display: flex;
                        align-items: center;
                        flex-direction : ${position === "left" ? 'row' : 'row-reverse'};
                        width:100%;
                        gap:3%;
                        
                        @media screen and (max-width: ${MIN_TABLET_SCREEN_WIDTH}) {
                            flex-direction: column;
                        }
                        `}
          >
            {image &&
              cloneElement(image, {
                css: css`
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                width: ${imgWidth};
                                // we need to modify the height
                                // height: calc(
                                //   var(--spectrum-global-dimension-size-4600) -
                                //     var(--spectrum-global-dimension-size-225)
                                // );
                                box-sizing: border-box;
                                padding: var(--spectrum-global-dimension-size-200);
                                margin-top: 0;

                                .gatsby-resp-image-wrapper {
                                    max-width: none !important;
                                    width: 100% !important;
                                    height: 100% !important;
                                }

                                .gatsby-resp-image-image {
                                    object-fit: contain;
                                }

                                @media screen and (max-width: ${TABLET_SCREEN_WIDTH}) {
                                    height: auto;
                                    width: 100%;
                                }
                                `,
              })}
            {assetImg &&
              <div className={assetImg?.props?.children} />}

            <Media css={mediaCSS} video={video} />

            {videoUrl &&
              <video loop="true" muted="true" autoPlay preload="metadata" playsInline css={css`
                            display: inline;
                            width: ${layoutColumns(5)};
                            box-sizing: border-box;
                            padding: var(--spectrum-global-dimension-size-200);
                        
                            @media screen and (max-width: ${TABLET_SCREEN_WIDTH}) {
                              display: block;
                              width: 100%;
                            }
                          }
                            `}>
                <source src={videoUrl} type="video/mp4" />
              </video>}

            {!imageOnly && <div
              css={css`
                                ${hasCodeBlock ? `width: 70%;` : `width: 50%;`}
                                display: flex;
                                flex-direction: column;
                                justify-content: center;
                                text-align: left;
                                box-sizing: border-box;
                                padding: 0 var(--spectrum-global-dimension-size-400);
                                
                                @media screen and (max-width: ${TABLET_SCREEN_WIDTH}) {
                                width: 100%;
                                margin: var(--spectrum-global-dimension-size-400) 0;
                                }
                            `}
            >
              <Icons icons={icons} isCentered={isCentered} />

              {heading && (
                <Element
                  className="spectrum-Heading spectrum-Heading--sizeM"
                  css={css`
                                    margin-top: 0 !important;
                                    margin-bottom: var(
                                    --spectrum-global-dimension-size-200
                                    ) !important;

                                    & + p {
                                    margin-top: 0 !important;
                                    }
                                `}
                >
                  {heading.props?.children}
                </Element>
              )}
              {subHeading && !linksGroups && (
                <h3
                  className="spectrum-Heading spectrum-Heading--sizeM"
                  css={css`
                                        font-size: var(
                                        --spectrum-global-dimension-size-225
                                        ) !important;
                                        margin-bottom: var(
                                            --spectrum-global-dimension-size-200
                                        ) !important;

                                        & ~ p {
                                            margin-top: 0;
                                            margin-bottom: 0 !important;
                                        }
                                        `}
                >
                  {subHeading.props.children}
                </h3>
              )}

              <Texts texts={props} />

              {subHeading && linksGroups && (
                <h3
                  className="spectrum-Heading spectrum-Heading--sizeM"
                  css={css`
                                    font-size: var(
                                        --spectrum-global-dimension-size-225
                                    ) !important;                  
                                    margin-top: var(
                                        --spectrum-global-dimension-size-200
                                    ) !important;

                                    & ~ p {
                                        margin-top: 0;
                                        margin-bottom: 0 !important;
                                    }
                                    `}
                >
                  {subHeading.props.children}
                </h3>
              )}

              {linksGroups && (
                <Links links={linksGroups} isCentered={isCentered} isLinksGroups />
              )}
              <HeroButtons
                buttons={buttons}
                styles={[variantStyleFill, variantStyleOutline]}
                variants={[variantsTypePrimary, variantsTypeSecondary]}
                heading={homeZigZag ? heading?.props?.children : ''}
                css={css`
                                margin-top: var(--spectrum-global-dimension-size-200);
                                `}
              />

              <Links links={links} isCentered={isCentered} />
            </div>}
          </div>
        </div>
      </section>
    );
  }
};

TextBlock.propTypes = {
  heading: PropTypes.element,
  links: PropTypes.element,
  icons: PropTypes.element,
  buttons: PropTypes.element,
  linksGroups: PropTypes.element,
  image: PropTypes.element,
  video: PropTypes.element,
  theme: PropTypes.string,
  width: PropTypes.oneOf(["100%", "50%", "33%", "25%"]),
  isCentered: PropTypes.bool,
  headerElementType: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  imageOnly: PropTypes.bool,
  primaryOutline: PropTypes.bool,
  hasCodeBlock: PropTypes.bool,
  imgWidth: PropTypes.string,
  homeZigZag: PropTypes.bool,
  isbuttonGroups: PropTypes.bool,
  videoUrl: PropTypes.element,
  position: PropTypes.string,
};

export { TextBlock };
