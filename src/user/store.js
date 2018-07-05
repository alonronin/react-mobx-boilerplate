import { observable, action, computed } from 'mobx';

class Store {
	@observable first = 'Alon';
	@observable last = 'Valadji';

	@action setState = state => Object.assign(this, state);

	@computed get fullName() {
		return `${this.first} ${this.last}`;
	}

	toJSON() {
		const first = this.first;
		const last = this.last;
		const fullName = this.fullName;

		return {
			first,
			last,
			fullName
		};
	}
}

export default Store;
