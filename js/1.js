function click1() {
    document.getElementById('c1').style.color = 'rgb(247,195,8)';
    document.getElementById('c2').style.color = 'white';
    document.getElementById('c3').style.color = 'white';
    document.getElementById('c4').style.color = 'white';
    document.getElementById('c5').style.color = 'white';

    document.getElementById('Magazin').style.display = 'block';
    document.getElementById('o_nas').style.display = 'none';
    document.getElementById('gde_ky').style.display = 'none';
    document.getElementById('FAQ').style.display = 'none';
    document.getElementById('cont').style.display = 'none';

}

function click2() {
    document.getElementById('c1').style.color = 'white';
    document.getElementById('c2').style.color = 'rgb(247,195,8)';
    document.getElementById('c3').style.color = 'white';
    document.getElementById('c4').style.color = 'white';
    document.getElementById('c5').style.color = 'white';

    document.getElementById('Magazin').style.display = 'none';
    document.getElementById('o_nas').style.display = 'block';
    document.getElementById('gde_ky').style.display = 'none';
    document.getElementById('FAQ').style.display = 'none';
    document.getElementById('cont').style.display = 'none';
}

function click3() {
    document.getElementById('c1').style.color = 'white';
    document.getElementById('c2').style.color = 'white';
    document.getElementById('c3').style.color = 'rgb(247,195,8)';
    document.getElementById('c4').style.color = 'white';
    document.getElementById('c5').style.color = 'white';

    document.getElementById('Magazin').style.display = 'none';
    document.getElementById('o_nas').style.display = 'none';
    document.getElementById('gde_ky').style.display = 'block';
    document.getElementById('FAQ').style.display = 'none';
    document.getElementById('cont').style.display = 'none';
}

function click4() {
    document.getElementById('c1').style.color = 'white';
    document.getElementById('c2').style.color = 'white';
    document.getElementById('c3').style.color = 'white';
    document.getElementById('c4').style.color = 'rgb(247,195,8)';
    document.getElementById('c5').style.color = 'white';

    document.getElementById('Magazin').style.display = 'none';
    document.getElementById('o_nas').style.display = 'none';
    document.getElementById('gde_ky').style.display = 'none';
    document.getElementById('FAQ').style.display = 'block';
    document.getElementById('cont').style.display = 'none';
}

function click5() {
    document.getElementById('c1').style.color = 'white';
    document.getElementById('c2').style.color = 'white';
    document.getElementById('c3').style.color = 'white';
    document.getElementById('c4').style.color = 'white';
    document.getElementById('c5').style.color = 'rgb(247,195,8)';

    document.getElementById('Magazin').style.display = 'none';
    document.getElementById('o_nas').style.display = 'none';
    document.getElementById('gde_ky').style.display = 'none';
    document.getElementById('FAQ').style.display = 'none';
    document.getElementById('cont').style.display = 'block';
}

function krest() {
    document.getElementById('fon_bp').style.display = 'none';
    document.getElementById('bp1').style.display = 'none';
    document.getElementById('bp2').style.display = 'none';
    document.getElementById('bp3').style.display = 'none';
    document.getElementById('bp4').style.display = 'none';
    document.getElementById('bp5').style.display = 'none';
    document.getElementById('bp6').style.display = 'none';
    document.getElementById('bp7').style.display = 'none';
    document.getElementById('bp8').style.display = 'none';
}

function br1() {
    document.getElementById('fon_bp').style.display = 'flex';
    document.getElementById('bp1').style.display = 'flex';
}

function br2() {
    document.getElementById('fon_bp').style.display = 'flex';
    document.getElementById('bp2').style.display = 'flex';
}

function br3() {
    document.getElementById('fon_bp').style.display = 'flex';
    document.getElementById('bp3').style.display = 'flex';
}

function br4() {
    document.getElementById('fon_bp').style.display = 'flex';
    document.getElementById('bp4').style.display = 'flex';
}

function br5() {
    document.getElementById('fon_bp').style.display = 'flex';
    document.getElementById('bp5').style.display = 'flex';
}

function br6() {
    document.getElementById('fon_bp').style.display = 'flex';
    document.getElementById('bp6').style.display = 'flex';
}

function br7() {
    document.getElementById('fon_bp').style.display = 'flex';
    document.getElementById('bp7').style.display = 'flex';
}

function br8() {
    document.getElementById('fon_bp').style.display = 'flex';
    document.getElementById('bp8').style.display = 'flex';
}

let cart = {};

function add_to_cart(item, price) {
    if (cart[item] == undefined) {
        cart[item] = {
            'name': document.querySelector(`#${item} .bp-title`).innerHTML,
            'img': document.querySelector(`#${item} .bp-left`).innerHTML,
            'count': Number(document.querySelector(`#${item}-count`).value),
            'price': document.querySelector(`#${item} .bp-price`).innerHTML.replace(',', '.').replace('₽', '').replace(' ', '') * 1
        };
    } else {
        cart[item]['count'] += Number(document.querySelector(`#${item}-count`).value);
    }
}

function show_cart() {
    document.getElementById('cart').style.display = 'flex';

    let sum = 0;
    document.querySelector('.cart-content').innerHTML = "";

    for (element in cart) {
        document.querySelector('.cart-content').innerHTML += `
    <div class="cart-item">
    <div class="item-img">
    ${cart[element]['img']}
    </div>
    <div class="item-info">
        <div class="item-name">
            ${cart[element]['name']}
        </div>
        <div class="item-price">
        ${cart[element]['price']} <span>₽</span>
        </div>
        <div class="item-count">
            <input type="number" name="bp-count" id="item-${element}-count" min="0" max="25" value="${cart[element]['count']}">
        </div>
    </div>
    </div>
    `;
        sum += (cart[element]['count'] * cart[element]['price']);
    }

    document.querySelector('.cart-sum-number').innerHTML = `${sum} <span>₽</span>`;
}

function close_cart() {
    document.getElementById('cart').style.display = 'none';
}