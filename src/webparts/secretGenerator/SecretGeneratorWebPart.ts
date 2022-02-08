import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './SecretGeneratorWebPart.module.scss';
import * as strings from 'SecretGeneratorWebPartStrings';

export interface ISecretGeneratorWebPartProps {
  description: string;
}

export default class SecretGeneratorWebPart extends BaseClientSideWebPart<ISecretGeneratorWebPartProps> {

  private registerLiveReload() {
    if (this.context.manifest["loaderConfig"]["internalModuleBaseUrls"][0]
                         .indexOf("https://localhost:4321") !== -1) {
  
      // create a new <script> element
      let script = document.createElement('script');
      // assign the src attribute to the livereload serve
      script.src = "//localhost:35729/livereload.js?snipver=1";
      // add script to the head section of the page
      document.head.appendChild(script);
  
    }
  }
  public render(): void {
    // register live reload
    this.registerLiveReload();
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+-=[]\\{}|;:\'",./?';
    var randomString = '';
    var length = 20;
    for ( var i = 0; i < length; i++ ) {
      randomString += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    this.domElement.innerHTML = `
      <div class="${ styles.secretGenerator }">
        <div class="${ styles.container }">
          <div class="${ styles.row }">
            <div class="${ styles.column }">
              <span class="${ styles.title }">Your new secret is: ${ randomString }</span>
            </div>
          </div>
        </div>
      </div>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
