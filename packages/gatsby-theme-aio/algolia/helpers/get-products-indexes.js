/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

// TODO: Document usage
// const product = getProductFromIndex(adobeIndexes.aem_developer_materials);
// const index = getIndexesFromProduct(adobeProducts.adobe_commerce);
// console.log(product);
// console.log(index);

// Adobe products with documentation hosted on https//:developer.adobe.com
const adobeProducts = {
  adobe_after_effects: 'Adobe After Effects',
  adobe_analytics: 'Adobe Analytics',
  adobe_animate: 'Adobe Animate',
  adobe_audition: 'Adobe Audition',
  adobe_bridge: 'Adobe Bridge',
  adobe_camera_raw: 'Adobe Camera Raw',
  adobe_cloud_manager: 'Adobe Cloud Manager',
  adobe_commerce: 'Adobe Commerce',
  adobe_creative_cloud: 'Adobe Creative Cloud',
  adobe_customer_journey_analytics: 'Adobe Customer Journey Analytics',
  adobe_developer_app_builder: 'Adobe App Builder',
  adobe_developer_console: 'Adobe Developer Console',
  adobe_developer_enablement: 'Adobe Developer Enablement',
  adobe_document_services: 'Adobe Document Services',
  adobe_dreamweaver: 'Adobe Dreamweaver',
  adobe_experience_manager: 'Adobe Experience Manager',
  adobe_experience_platform: 'Adobe Experience Platform',
  adobe_express: 'Adobe Express',
  adobe_fonts: 'Adobe Fonts',
  adobe_illustrator: 'Adobe Illustrator',
  adobe_indesign: 'Adobe InDesign',
  adobe_io: 'Adobe I/O',
  adobe_journey_optimizer: 'Adobe Journey Optimizer',
  adobe_lightroom: 'Adobe Lightroom',
  adobe_lightroom_classic: 'Adobe Lightroom Classic',
  adobe_photoshop: 'Adobe Photoshop',
  adobe_premiere_pro: 'Adobe Premiere Pro',
  adobe_stock: 'Adobe Stock',
  adobe_substance_3D: 'Adobe Substance 3D',
  adobe_target: 'Adobe Target',
  adobe_workfront: 'Adobe Workfront',
  adobe_xd: 'Adobe XD',
  adobe_xmp: 'Adobe XMP',
  aio_theme: 'Adobe Theme Example', // For testing only
};

// Algolia adobeIndexes for Adobe products documentation.
const adobeIndexes = {
  aio_theme: 'aio-theme',
  adobe_dev_console: 'adobe-dev-console',
  adobe_io_events: 'adobe-io-events',
  adobe_io_runtime: 'adobe-io-runtime',
  aem_developer_materials: 'aem-developer-materials',
  after_effects: 'after-effects',
  analytics_2_0_apis: 'analytics-2.0-apis',
  animate: 'animate',
  app_builder: 'app-builder',
  app_builder_template_registry: 'app-builder-template-registry',
  audition: 'audition',
  bridge: 'bridge',
  camera_raw: 'camera-raw',
  cc_developer_platform_pages: 'cc-developer-platform-pages',
  cc_everywhere: 'cc-everywhere',
  cc_libraries_api: 'cc-libraries-api',
  cis_photoshop_api_docs: 'cis-photoshop-api-docs',
  cja_apis: 'cja-apis',
  cloudmanager_api_docs: 'cloudmanager-api-docs',
  commerce_admin_developer: 'commerce-admin-developer',
  commerce_cloud_tools: 'commerce-cloud-tools',
  commerce_contributor: 'commerce-contributor',
  commerce_extensibility: 'commerce-extensibility',
  commerce_frontend_core: 'commerce-frontend-core',
  commerce_marketplace: 'commerce-marketplace',
  commerce_php: 'commerce-php',
  commerce_pwa_studio: 'commerce-pwa-studio',
  commerce_webapi: 'commerce-webapi',
  commerce_xd_kits: 'commerce-xd-kits',
  creative_cloud_libraries: 'creative-cloud-libraries',
  dep: 'dep',
  document_services: 'document-services',
  dreamweaver: 'dreamweaver',
  experience_manager_forms_cloud_service_developer_reference:
    'experience-manager-forms-cloud-service-developer-reference',
  experience_platform_apis: 'experience-platform-apis',
  fonts: 'fonts',
  graphql_mesh_gateway: 'graphql-mesh-gateway',
  illustrator: 'illustrator',
  indesign: 'indesign',
  indesign_api_docs: 'indesign-api-docs',
  journey_optimizer_apis: 'journey-optimizer-apis',
  lightroom: 'lightroom',
  lightroom_classic: 'lightroom-classic',
  lightroom_public_apis: 'lightroom-public-apis',
  pdfservices_api_documentation: 'pdfservices-api-documentation',
  photoshop: 'photoshop',
  photoshop_api: 'photoshop-api',
  premiere_pro: 'premiere-pro',
  stock: 'stock',
  stock_api_docs: 'stock-api-docs',
  stock_api_specs: 'stock-api-specs',
  substance_3d_automation: 'substance-3d-automation',
  target_developers: 'target-developers',
  uxp_photoshop: 'uxp-photoshop',
  uxp_photoshop_2021: 'uxp-photoshop-2021',
  xd: 'xd',
  uxp_xd: 'uxp-xd',
  wf_apis: 'wf-apis',
  workfront_api_explorer: 'workfront-api-explorer',
  xmp_docs: 'xmp-docs',
};

const getProductFromIndex = index => {
  return {
    'after-effects': adobeProducts.adobe_after_effects,
    'analytics-2.0-apis': adobeProducts.adobe_analytics,
    animate: adobeProducts.adobe_animate,
    audition: adobeProducts.adobe_audition,
    bridge: adobeProducts.adobe_bridge,
    'cloudmanager-api-docs': adobeProducts.adobe_cloud_manager,
    'camera-raw': adobeProducts.adobe_camera_raw,
    'commerce-extensibility': adobeProducts.adobe_commerce,
    'commerce-marketplace': adobeProducts.adobe_commerce,
    'commerce-contributor': adobeProducts.adobe_commerce,
    'commerce-cloud-tools': adobeProducts.adobe_commerce,
    'commerce-webapi': adobeProducts.adobe_commerce,
    'commerce-php': adobeProducts.adobe_commerce,
    'commerce-frontend-core': adobeProducts.adobe_commerce,
    'commerce-admin-developer': adobeProducts.adobe_commerce,
    'commerce-xd-kits': adobeProducts.adobe_commerce,
    'commerce-pwa-studio': adobeProducts.adobe_commerce,
    'cc-developer-platform-pages': adobeProducts.adobe_creative_cloud,
    'creative-cloud-libraries': adobeProducts.adobe_creative_cloud,
    'cc-libraries-api': adobeProducts.adobe_creative_cloud,
    'cja-apis': adobeProducts.adobe_customer_journey_analytics,
    'app-builder': adobeProducts.adobe_developer_app_builder,
    'graphql-mesh-gateway': adobeProducts.adobe_developer_app_builder,
    'app-builder-template-registry': adobeProducts.adobe_developer_app_builder,
    'adobe-dev-console': adobeProducts.adobe_developer_console,
    dep: adobeProducts.adobe_developer_enablement,
    dreamweaver: adobeProducts.adobe_dreamweaver,
    'document-services': adobeProducts.adobe_document_services,
    'pdfservices-api-documentation': adobeProducts.adobe_document_services,
    'aem-developer-materials': adobeProducts.adobe_experience_manager,
    'experience-manager-forms-cloud-service-developer-reference':
      adobeProducts.adobe_experience_manager,
    'experience-platform-apis': adobeProducts.adobe_experience_platform,
    'cc-everywhere': adobeProducts.adobe_express,
    fonts: adobeProducts.adobe_fonts,
    illustrator: adobeProducts.adobe_illustrator,
    indesign: adobeProducts.adobe_indesign,
    'indesign-api-docs': adobeProducts.adobe_indesign,
    'adobe-io-events': adobeProducts.adobe_io,
    'adobe-io-runtime': adobeProducts.adobe_io,
    'journey-optimizer-apis': adobeProducts.adobe_journey_optimizer,
    lightroom: adobeProducts.adobe_lightroom,
    'lightroom-public-apis': adobeProducts.adobe_lightroom,
    'lightroom-classic': adobeProducts.adobe_lightroom_classic,
    photoshop: adobeProducts.adobe_photoshop,
    'uxp-photoshop': adobeProducts.adobe_photoshop,
    'uxp-photoshop-2021': adobeProducts.adobe_photoshop,
    'cis-photoshop-api-docs': adobeProducts.adobe_photoshop,
    'photoshop-api': adobeProducts.adobe_photoshop,
    'premiere-pro': adobeProducts.adobe_premiere_pro,
    stock: adobeProducts.adobe_stock,
    'stock-api-docs': adobeProducts.adobe_stock,
    'stock-api-specs': adobeProducts.adobe_stock,
    'substance-3d-automation': adobeProducts.adobe_substance_3D,
    'target-developers': adobeProducts.adobe_target,
    'wf-apis': adobeProducts.adobe_workfront,
    'workfront-api-explorer': adobeProducts.adobe_workfront,
    xd: adobeProducts.adobe_xd,
    'uxp-xd': adobeProducts.adobe_xd,
    'xmp-docs': adobeProducts.adobe_xmp,
    'aio-theme': adobeProducts.aio_theme,
  }[index];
};

const getIndexesFromProduct = product => {
  return {
    'Adobe After Effects': [adobeIndexes.after_effects],
    'Adobe Analytics': [adobeIndexes.analytics_2_0_apis],
    'Adobe Animate': [adobeIndexes.animate],
    'Adobe Audition': [adobeIndexes.audition],
    'Adobe Bridge': [adobeIndexes.bridge],
    'Adobe Cloud Manager': [adobeIndexes.cloudmanager_api_docs],
    'Adobe Camera Raw': [adobeIndexes.camera_raw],
    'Adobe Commerce': [
      adobeIndexes.commerce_extensibility,
      adobeIndexes.commerce_marketplace,
      adobeIndexes.commerce_contributor,
      adobeIndexes.commerce_cloud_tools,
      adobeIndexes.commerce_webapi,
      adobeIndexes.commerce_php,
      adobeIndexes.commerce_frontend_core,
      adobeIndexes.commerce_admin_developer,
      adobeIndexes.commerce_xd_kits,
      adobeIndexes.commerce_pwa_studio,
    ],
    'Adobe Creative Cloud': [
      adobeIndexes.cc_developer_platform_pages,
      adobeIndexes.creative_cloud_libraries,
      adobeIndexes.cc_libraries_api,
    ],
    'Adobe Customer Journey Analytics': [adobeIndexes.cja_apis],
    'Adobe App Builder': [
      adobeIndexes.app_builder,
      adobeIndexes.app_builder_template_registry,
      adobeIndexes.graphql_mesh_gateway,
    ],
    'Adobe Developer Console': [adobeIndexes.adobe_dev_console],
    'Adobe Developer Enablement': [adobeIndexes.dep],
    'Adobe Dreamweaver': [adobeIndexes.dreamweaver],
    'Adobe Document Services': [
      adobeIndexes.document_services,
      adobeIndexes.pdfservices_api_documentation,
    ],
    'Adobe Experience Manager': [
      adobeIndexes.aem_developer_materials,
      adobeIndexes.experience_manager_forms_cloud_service_developer_reference,
    ],
    'Adobe Experience Platform': [adobeIndexes.experience_platform_apis],
    'Adobe Express': [adobeIndexes.cc_everywhere],
    'Adobe Fonts': [adobeIndexes.fonts],
    'Adobe Illustrator': [adobeIndexes.illustrator],
    'Adobe InDesign': [adobeIndexes.indesign, adobeIndexes.indesign_api_docs],
    'Adobe I/O': [adobeIndexes.adobe_io_events, adobeIndexes.adobe_io_runtime],
    'Adobe Journey Optimizer': [adobeIndexes.journey_optimizer_apis],
    'Adobe Lightroom': [
      adobeIndexes.lightroom,
      adobeIndexes.lightroom_public_apis,
      adobeIndexes.lightroom_classic,
    ],
    'Adobe Photoshop': [
      adobeIndexes.photoshop,
      adobeIndexes.uxp_photoshop,
      adobeIndexes.uxp_photoshop_2021,
      adobeIndexes.cis_photoshop_api_docs,
      adobeIndexes.photoshop_api,
    ],
    'Adobe Premiere Pro': [adobeIndexes.premiere_pro],
    'Adobe Stock': [adobeIndexes.stock, adobeIndexes.stock_api_docs, adobeIndexes.stock_api_specs],
    'Adobe Substance 3D': [adobeIndexes.substance_3d_automation],
    'Adobe Target': [adobeIndexes.target_developers],
    'Adobe Workfront': [adobeIndexes.wf_apis, adobeIndexes.workfront_api_explorer],
    'Adobe XD': [adobeIndexes.xd, adobeIndexes.uxp_xd],
    'Adobe XMP': [adobeIndexes.xmp_docs],
    'Adobe Theme Example': [adobeIndexes.aio_theme],
  }[product];
};

module.exports = {
  adobeProducts,
  adobeIndexes,
  getProductFromIndex,
  getIndexesFromProduct,
};
