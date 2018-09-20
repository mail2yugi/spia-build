interface StorageConfig {
  prefix?: string;
  storage?: Storage;
  expire?: number;
}

export const defaultConfig: StorageConfig = {
  prefix: 'spia.',
  storage: localStorage,
  expire: 3600
};
