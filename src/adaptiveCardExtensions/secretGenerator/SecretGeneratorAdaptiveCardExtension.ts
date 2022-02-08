import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseAdaptiveCardExtension } from '@microsoft/sp-adaptive-card-extension-base';
import { CardView } from './cardView/CardView';
import { QuickView } from './quickView/QuickView';
import { SecretGeneratorPropertyPane } from './SecretGeneratorPropertyPane';

export interface ISecretGeneratorAdaptiveCardExtensionProps {
  title: string;
  description: string;
  iconProperty: string;
}

export interface ISecretGeneratorAdaptiveCardExtensionState {
  description: string;
  secret: string;
}

const CARD_VIEW_REGISTRY_ID: string = 'SecretGenerator_CARD_VIEW';
export const QUICK_VIEW_REGISTRY_ID: string = 'SecretGenerator_QUICK_VIEW';

export default class SecretGeneratorAdaptiveCardExtension extends BaseAdaptiveCardExtension<
  ISecretGeneratorAdaptiveCardExtensionProps,
  ISecretGeneratorAdaptiveCardExtensionState
> {
  private _deferredPropertyPane: SecretGeneratorPropertyPane | undefined;

  public onInit(): Promise<void> {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+-=[]\\{}|;:\'",./<>?';
    var randomString = '';
    var length = 20;
    for ( var i = 0; i < length; i++ ) {
      randomString += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
     this.state = {
      description: this.properties.description,
      secret: randomString
    };

    this.cardNavigator.register(CARD_VIEW_REGISTRY_ID, () => new CardView());
    this.quickViewNavigator.register(QUICK_VIEW_REGISTRY_ID, () => new QuickView());

    return Promise.resolve();
  }

  public get title(): string {
    return this.properties.title;
  }

  protected get iconProperty(): string {
    return this.properties.iconProperty || require('./assets/SharePointLogo.svg');
  }

  protected loadPropertyPaneResources(): Promise<void> {
    return import(
      /* webpackChunkName: 'SecretGenerator-property-pane'*/
      './SecretGeneratorPropertyPane'
    )
      .then(
        (component) => {
          this._deferredPropertyPane = new component.SecretGeneratorPropertyPane();
        }
      );
  }

  protected renderCard(): string | undefined {
    return CARD_VIEW_REGISTRY_ID;
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return this._deferredPropertyPane!.getPropertyPaneConfiguration();
  }
}
