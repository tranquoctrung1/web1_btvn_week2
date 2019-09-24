let queryGoogle = document.getElementById('query-text');
let handleSubmit = document.getElementById('handle-submit');

// Xử lý sự kiện 
handleSubmit.addEventListener('click',searchValue);

function searchValue() 
{
    let stringSearchGoogle  = 'https://www.google.com/search?q=';

    // xử lý chuổi của input
    let stringQuery = queryGoogle.value.split(' ').join('+');
    stringSearchGoogle = stringSearchGoogle + stringQuery;

    // chuyển sang trang google
    window.open(stringSearchGoogle);

    queryGoogle.value = '';
}