export interface AppConfig {
  pageTitle: string;
  pageDescription: string;
  companyName: string;

  supportsChatInput: boolean;
  supportsVideoInput: boolean;
  requiresInterviewId: boolean;
  isPreConnectBufferEnabled: boolean;

  logo: string;
  startButtonText: string;
  accent?: string;
  logoDark?: string;
  accentDark?: string;

  // for configuration
  sandboxId?: string;
  agentName?: string;
}

export const APP_CONFIG_DEFAULTS: AppConfig = {
  companyName: 'Ikshvaku Innovations',
  pageTitle: 'Shaurya - AI-Driven Evaluation Platform | Complete Evaluation Prep',
  pageDescription: 'Shaurya - AI-Driven Evaluation Platform | Complete Evaluation Prep',

  supportsChatInput: true,
  supportsVideoInput: true,
  requiresInterviewId: true,
  isPreConnectBufferEnabled: true,

  logo: '/opengraph-image-bg.png',
  accent: '#002cf2',
  logoDark: '/opengraph-image-bg.png',
  accentDark: '#1fd5f9',
  startButtonText: 'Start call',

  // for configuration
  sandboxId: undefined,
  agentName: undefined,
};
