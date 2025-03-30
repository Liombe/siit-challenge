export function computeServicePrice({ cost_per_user, flat_cost, nb_users_included }, nbUsers) {
  return flat_cost + cost_per_user * Math.max(0, nbUsers - nb_users_included)
}
