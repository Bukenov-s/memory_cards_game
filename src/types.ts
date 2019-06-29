export interface ICard {
  id: number;
  value: string;
  open: boolean;
}

export type IState = Readonly<{
  cardsList: ICard[],
  openCards: ICard[] | [],
  gameOver: boolean
}>