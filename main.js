
//モーダルを出現させる処理
//eはelement 要素
const modalWrapOpen = function(e) {
  //クリックした円のdata属性の値を取得
  //データ属性を取る　dataset (data- の要素とってきてる)
  //data- の後の「modal」がついた要素を取得（仮説）
  const dataModalOpen = e.currentTarget.dataset.modalOpen;
  //.circles_modal_wrapperが付与されている要素を全て取得
  //data属性の値が同じ要素に.is_openを付与
  Array.from(document.querySelectorAll('.circles_modal_wrapper')).forEach((e, i) => {
    if(e.getAttribute('data-modal') === dataModalOpen){
      e.classList.toggle('is_open');
    }
  })
}

//クリックイベントの定義（複数なのでforEachでイテレート）
//.circles_modal_openが付与されている要素を全て取得
//全ての要素に対してクリックイベントを定義する
Array.from(document.querySelectorAll('.circles_modal_open')).forEach((modalOpenElement) => {
  modalOpenElement.addEventListener('click', modalWrapOpen);
})

//モーダルを消す
//×が押された時の親要素(.circles_modal_wrapper)を取得
//その要素に対してis-openクラスの切り替えを行う
const modalCloseAction = function(e) {
  const targetModal = e.currentTarget.closest('.circles_modal_wrapper');
  targetModal.classList.toggle('is_open')
};

//クリックイベントの定義
Array.from(document.querySelectorAll('.circles_modal_close')).forEach((modalCloseElement) => {
  modalCloseElement.addEventListener('click', modalCloseAction)
})