var fs = require('fs');

fs.readdir('.', function(error, files) {
if (error) { console.log(error); throw error;}

else {console.log(files);}
});


var filenames = fs.readdirSync('.');

var i;

for (i = 0; i < filenames.length; i++) {
  console.log(filenames[i]);
}

console.log('ready');

console.log('can process next job...');


/*
������ api�� �����ϴ� �񵿱��� api�� ��ü�Ұ�
������ api�� ȣ������ ó�� ������ �״�� callback�Լ��� �ű��
��µǴ� ������� ���̸� �����Ұ�
*/
