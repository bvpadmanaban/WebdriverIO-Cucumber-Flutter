Feature: BookStore App

  Scenario Outline: As a user, I can Sign in the BookStore App

    When I signin with <username> and <password>
    Then I should see a Book <text>

    Examples:
      | username    | password             | text    |
      | Padmanaban  | SuperSecretPassword! | Popular |
