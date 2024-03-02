// Exercise 17 
var guest_list = ['Tania', 'Esha', 'Rida', 'Saima'];
// for (var i = 0; i < guest_list.length; i++) {
//     console.log('Respected Madam' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\n\nThank you.\n');
// }
var not_present = 'Esha';
var new_guest = 'Ahsan';
guest_list[1] = new_guest;
// for (var i = 0; i < guest_list.length; i++) {
//     console.log('Respected Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\n\nThank you.\n');
// }
// console.log("Mrs. ".concat(not_present, " will not coming tomorrow on dinner."));
guest_list.unshift('Javeria', 'Hina', 'Sana');
// for (var i = 0; i < guest_list.length; i++) {
//     console.log('Respected Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\n\nThank you.\n');
// }
console.log('\nunfortunately we can not arrange a big table so, only two people allow');
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("sorry Madam. ".concat(remove_guest, " you are not invited."));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Madam ' + guest_list[i] + ',\nyes you are still invited on tomorrow\nThank you.\n');
}
guest_list.splice(0, 2);
console.log(guest_list);
