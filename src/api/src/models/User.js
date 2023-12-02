export class Game {
  constructor(
    first_name,
    last_name,
    username,
    email,
    password,
    has_accepted_use_terms
  ) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.username = username;
    this.email = email;
    this.password = password;
    this.has_accepted_use_terms = has_accepted_use_terms;
  }
}
