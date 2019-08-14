import { api } from "./api"
const HOMECARDS = '/homecards'

interface IGetHomecards {
  homecards: []
}

const getHomecards = async () => {
  const {homecards}: IGetHomecards = await api.get(HOMECARDS);
  return homecards;
}

export const homecardsService = {
  getHomecards
}