function adicionarDiasData(data, dias)
{

    // 1- Cria a variavel Date [DataInicio]
    var DataInicio = new Date(data);

    // 1.2 - Convert os dias inteiro
    dias = new Number(dias);
   
    // 2- Gera os milissegundos dos dias
    var AddMsDosDias = (dias * 24 * 60 * 60 * 1000);

    // 3- Cria a variavel Date [DataTermino] com os dias acrescentados
    var DataTermino = new Date(DataInicio.getTime() + AddMsDosDias);

    // 4 - Formata a Data em uma String [yyyy-MM-dd]
    var DD = new String(DataTermino.getDate()).padStart(2,'0');

    var MM = new String(DataTermino.getMonth() + 1).padStart(2,'0');

    var YYYY = new String(DataTermino.getFullYear());

    var HH = new String(DataTermino.getHours()).padStart(2,'0');

    var MI = new String(DataTermino.getMinutes()).padStart(2,'0');

    var SS = new String(DataTermino.getSeconds()).padStart(2,'0');

    //Mascara ("2019-06-11T08:36")
    var TextDataTermino = YYYY + "-" + MM + "-" + DD + "T" + HH + ":" + MI;

    return TextDataTermino;

}

function adicionarHorasNaData(data, addHora)
{

    // 1- Cria a variavel Date [DataInicio]
    var DataInicio = new Date(data);

    // 2- Convert os dias inteiro
    var HoraAdd = new Number(addHora);

    // 3- Gera os milissegundos das horas
    var AddMsDosHoras = (HoraAdd * 60 * 60 * 1000);

    // 4- Cria a variavel Date [DataTermino] com os dias acrescentados
    var DataTermino = new Date(DataInicio.getTime() + AddMsDosHoras);

    // 5- Formata a Data em uma String [yyyy-MM-ddThh:mm]
    var DD = new String(DataTermino.getDate()).padStart(2,'0');

    var MM = new String(DataTermino.getMonth() + 1).padStart(2,'0');

    var YYYY = new String(DataTermino.getFullYear());

    var HH = new String(DataTermino.getHours()).padStart(2,'0');

    var MI = new String(DataTermino.getMinutes()).padStart(2,'0');

    var SS = new String(DataTermino.getSeconds()).padStart(2,'0');

    var TextDataTermino = YYYY + "-" + MM + "-" + DD + "T" + HH + ":" + MI;

    return TextDataTermino;

}
