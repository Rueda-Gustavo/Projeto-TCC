function clone() {
    var element = document.querySelector('#container-padrao')

    var clone = element.cloneNode(true)

    clone.id = 'teste01'
    clone.getElementsByTagName('h4').nome_evento0.id = 'nome_evento1'
    clone.getElementsByTagName('h5').data_evento0.id = 'data_evento1'
    clone.getElementsByTagName('h6').desc_evento0.id = 'desc_evento1'

    /*conceito para adicionar os novos eventos -> /* criar um clone1 do evento padrão 
                                                   * editar o evento padrão para ser o primeiro evento e mudar seu id
                                                   * caso existam mais eventos, copiar novamente e criar um clone2 e após editar o clone1
                                                   * mudar o id do clone1 para ser o segundo eventos, mudar os textos de data, nome e desc
                                                   * e adicionar o clone2
                                                   * fazer isso sucessivamente até chegar a marca de 4 eventos na página(ou mais)
                                                   */

    //e = document.getElementById('container_padrao')
    //e.getElementsByTagName('h4').nome_evento0.innerHTML = 'a'
    //e.getElementsByTagName('h5').data_evento0.innerHTML = 'b'
    //e.getElementsByTagName('h6').desc_evento0.innerHTML = 'c'

    //clone.getElementsByTagName('h4').nome_evento0.id = 'nome_evento1'
    //clone.getElementsByTagName('h5').desc_evento0.id = 'desc_evento1'
    //clone.getElementsByTagName('h6').desc_evento0.id = 'desc_evento1'

    element.after(clone)
}

function showEventOnCalendar(day, month, year) {
    /* Passo a passo para criar um elemento HMTL i com a classe circle e o id referente ao seu número de evento relativo aquele dia
     * e referente a linha e coluna que o mesmo será alocado, a cor será definida pelo user. Após isso é necessário obter a localização 
     * do evento, que será dado pela linha e coluna
    var eventIcon = document.createElement('i')
    eventIcon.id = 'event2-l3c1'
    eventIcon.className = 'circle'
    eventIcon.style.backgroundColor = 'blue'
    eventLocalization = document.getElementById('l3c1')
    eventLocalization.appendChild(eventIcon)
    
    /* Passo a passo para obter a margin left do circle que acabou de ser adicionado e movê-lo para a esquerda, isso será necessário
     * quando existirem mais eventos localizados na mesma célula
    temp = getComputedStyle(eventIcon)
    temp.marginLeft
    iconMarginLeft = temp.marginLeft
    iconMarginLeft = iconMarginLeft.replaceAll('px', '')
    iconMarginLeft = iconMarginLeft - 4
    iconMarginLeft = iconMarginLeft + 'px'
    eventIcon.style.marginLeft = iconMarginLeft
    */


}




