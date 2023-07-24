import React, { useState } from "react";
import { Paragraph } from "@contentful/f36-components";
import { FieldAppSDK } from "@contentful/app-sdk";
import { MultipleEntryReferenceEditor } from "@contentful/field-editor-reference";
import { /* useCMA, */ useSDK } from "@contentful/react-apps-toolkit";

const Field = () => {
  const sdk = useSDK<FieldAppSDK>();
  const [state] = useState(false)
  /*
     To use the cma, inject it as follows.
     If it is not needed, you can remove the next line.
  */
  // const cma = useCMA();
  // If you only want to extend Contentful's default editing experience
  // reuse Contentful's editor components
  // -> https://www.contentful.com/developers/docs/extensibility/field-editors/
  if (state) {
    return (
      <MultipleEntryReferenceEditor
        viewType="link"
        sdk={sdk}
        isInitiallyDisabled
        hasCardEditActions
        parameters={{
          instance: {
            showCreateEntityAction: true,
            showLinkEntityAction: true,
          },
        }}
      />
    );
  }
  return (
    <Paragraph>Hello Entry Field Component (AppId: {sdk.ids.app})</Paragraph>
  );
};

export default Field;
