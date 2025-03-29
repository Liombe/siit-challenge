export type User = {
    name: string,
    position: string,
    service_ids: Array<Number>,
    avatar_url: string
}

export type Service = {
    id: Number,
    name: string,
    website_url: string,
    logo_url: string,
    price: {
        cost_per_user: Number,
        flat_cost: Number,
        nb_users_included: Number
    }
}
