function Animal(){this._name = name}
function Human(){Animal.apply(this, arguments)}
function SuperHero(){Human.apply(this, arguments)}