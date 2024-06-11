function enviar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    if(formano.value == 0 || formano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        var gen = document.getElementsByName('radgenero')
        var idade = formano.value
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (gen[0].checked){
            gen = 'ação'
            if (idade <= 1972){
                document.querySelector('div#forms').style.visibility = 'hidden';
                img.setAttribute('src', 'img/acao_idoso.jpg')
                res.innerHTML = 'idosos'
            }else if (idade <= 2002){
                document.querySelector('div#forms').style.visibility = 'hidden';
                img.setAttribute('src', 'img/acao_adulto.jpg')
                res.innerHTML = 'adultos'
            }else if (idade <= 2011){
                document.querySelector('div#forms').style.visibility = 'hidden';
                img.setAttribute('src', 'img/acao_jovens.jpg')
                res.innerHTML = 'jovens'
            }else if (idade >= 2012 && idade <= 2023){
                res.innerHTML = 'crianças'
                document.querySelector('div#forms').style.visibility = 'hidden';
                img.setAttribute('src', 'img/acao_crianca.jpg')
            }
        }else if (gen[1].checked){
            gen = 'comédia'
            if (idade <= 1972){
                document.querySelector('div#forms').style.visibility = 'hidden';
                img.setAttribute('src', 'img/comedia_idoso.jpg')
                res.innerHTML = 'idosos'
            }else if (idade <= 2002){
                document.querySelector('div#forms').style.visibility = 'hidden';
                img.setAttribute('src', 'img/comedia_adulto.jpg')
                res.innerHTML = 'adultos'
            }else if (idade <= 2011){
                document.querySelector('div#forms').style.visibility = 'hidden';
                img.setAttribute('src', 'img/comedia_jovens.jpg')
                res.innerHTML = 'jovens'
            }else if (idade >= 2012 && idade <= 2023){
                res.innerHTML = 'crianças'
                document.querySelector('div#forms').style.visibility = 'hidden';
                img.setAttribute('src', 'img/comedia_crianca.jpg')
            }
        }
        else if (gen[2].checked){
        gen = 'romance'
        if (idade <= 1972){
            document.querySelector('div#forms').style.visibility = 'hidden';
            img.setAttribute('src', 'img/romance_idoso.jpg')
            res.innerHTML = 'idosos'
        }else if (idade <= 2002){
            document.querySelector('div#forms').style.visibility = 'hidden';
            img.setAttribute('src', 'img/romance_adulto.jpg')
            res.innerHTML = 'adultos'
        }else if (idade <= 2011){
            document.querySelector('div#forms').style.visibility = 'hidden';
            img.setAttribute('src', 'img/romance_jovem.jpg')
            res.innerHTML = 'jovens'
        }else if (idade >= 2012 && idade <= 2023){
            res.innerHTML = 'crianças'
            document.querySelector('div#forms').style.visibility = 'hidden';
            img.setAttribute('src', 'img/romance_crianca.jpg')
        }
        }
        else if (gen[3].checked){
            gen = 'terror'
            if (idade <= 1972){
                document.querySelector('div#forms').style.visibility = 'hidden';
                img.setAttribute('src', 'img/terror_idoso.jpg')
                res.innerHTML = 'idosos'
            }else if (idade <= 2002){
                document.querySelector('div#forms').style.visibility = 'hidden';
                img.setAttribute('src', 'img/terror_adulto.jpg')
                res.innerHTML = 'adultos'
            }else if (idade <= 2011){
                document.querySelector('div#forms').style.visibility = 'hidden';
                img.setAttribute('src', 'img/terror_jovem.jpg')
                res.innerHTML = 'jovens'
            }else if (idade >= 2012 && idade <= 2023){
                res.innerHTML = 'crianças'
                document.querySelector('div#forms').style.visibility = 'hidden';
                img.setAttribute('src', 'img/terror_crianca.jpg')
            }
            }
            res.innerHTML = `Filme de ${gen} para nascidos em ${idade}!`
            res.appendChild(img)
    }
}

