export enum ConsumptionCategoryEnum {
  LAVAR_LOUCA = "LAVAR_LOUCA",
  TOMAR_BANHO = "TOMAR_BANHO",
  ESCOVAR_DENTE = "ESCOVAR_DENTE",
  LAVAR_ROUPA = "LAVAR_ROUPA",
  ENERGIA = "ENERGIA",
  OUTROS = "OUTROS",
}

type FLowRate = {
  [key: string]: number;
};

export const flowRateDefaultValues: FLowRate = {
  LAVAR_LOUCA: 8,
  TOMAR_BANHO: 10,
  ESCOVAR_DENTE: 8,
  LAVAR_ROUPA: 15,
};
