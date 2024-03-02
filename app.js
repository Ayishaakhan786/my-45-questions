// Exercise 16
var guest_list = ['Tania', 'Esha', 'Rida', 'Saima'];
// for (var i = 0; i < guest_list.length; i++) {
//     console.log('Respected Madam' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\n\nThank you.\n');
// }
var not_present = 'Esha';
var new_guest = 'Ahsan';
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\n\nThank you.\n');
}
// console.log("Mrs. ".concat(not_present, " will not coming tomorrow on dinner."));
guest_list.unshift('Javeria', 'Hina', 'Sana');
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\n\nThank you.\n');
}
