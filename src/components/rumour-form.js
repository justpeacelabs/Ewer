import { h, Component } from 'preact';

export default class AddRumour extends Component {
  render({ todo }) {
    const regions = ["Hlaing", "Yangon", "Kyauktada", "Inya", "Mandalay", "Wagan"].sort();

    return (
      <form class="pure-form pure-form-stacked">
        <fieldset>
          <legend>Add a rumour</legend>

          <label for="email">Email</label>
          <input id="email" type="email" placeholder="Email"/>

          <label for="password">Password</label>
          <input id="password" type="password" placeholder="Password"/>

          <label for="state">State</label>
          <select id="state">
            {
              regions.map(region => <option>{region}</option>)
            }
          </select>

          <button type="submit" class="pure-button pure-button-primary">Sign in</button>
        </fieldset>
      </form>
    );
  }
}
