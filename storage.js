//ローカルストレージの開発
/*
保存はstring型で行う必要があるが、開発する際にstring型はobject型より使い勝手がよくない。

そのため、saveStorageとloadStorageのdata引数をobject型にし、保存時にstring型へ変換。

loadStorageでdataがnullか確認し、nullの場合は空の配列に初期化。
*/

function saveStorage(key,data) {

    var value = JSON.stringify(data);
    localStorage.setItem(key, value);
}

function loadStorage(key) {
   	var value = localStorage.getItem(key);
	var data = JSON.parse(value);

    if (data == null)
        data = [];
    return data;
}