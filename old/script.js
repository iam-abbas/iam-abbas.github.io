$(document).ready(function(){

  startAnimation();



  function startAnimation(){
    jQuery('.skills').each(function(){

      jQuery(this).find('.skillbar').animate({
        width:jQuery(this).attr('data-percent')
        },2000);

        });
      }
      });

      class TypeWriter {
        static get _quotes () {
          return [
          `Hey There, My name is Abbas|And I am a Full Stack Developer`
          ]
        }

        static _write (quoteIndex, quoteCharacterIndex, isClearing, isAnswer) {
          let question = document.querySelector('.question')
          let answer = document.querySelector('.answer')
          let quote = TypeWriter._quotes[quoteIndex]

          // Determine if characters were being written or cleared
          if (!isClearing) {
            // Every single character will be written until there's none left
            if (quoteCharacterIndex < quote.length) {
              // The pipe '|' indicates that the next chars are for answer
              if (quote.charAt(quoteCharacterIndex) === '|') {
                isAnswer = true
                quoteCharacterIndex++
                setTimeout(() => TypeWriter._write(quoteIndex, quoteCharacterIndex, isClearing, isAnswer), 1500)
                } else {
                  // Continue writing each character here
                  if (isAnswer) {
                    question.classList.remove('caret')
                    answer.classList.add('caret')
                    answer.innerHTML = answer.textContent + quote.charAt(quoteCharacterIndex)
                    } else {
                      answer.classList.remove('caret')
                      question.classList.add('caret')
                      question.innerHTML = question.textContent + quote.charAt(quoteCharacterIndex)
                    }
                    quoteCharacterIndex++
                    setTimeout(() => TypeWriter._write(quoteIndex, quoteCharacterIndex, isClearing, isAnswer), 75)
                  }
                  } else if (quoteCharacterIndex === quote.length) {
                    // If all characters were written out, then clear them
                    isClearing = true
                    setTimeout(() => TypeWriter._write(quoteIndex, quoteCharacterIndex, isClearing, isAnswer), 5000)
                  }
                  } else {
                    // Continue clearing characters here
                    if (question.textContent.length > 0 || answer.textContent.length > 0) {
                      if (answer.textContent.length > 0) {
                        answer.innerHTML = answer.textContent.substring(0, answer.textContent.length - 1)
                        } else if (question.textContent.length > 0) {
                          answer.classList.remove('caret')
                          question.classList.add('caret')
                          question.innerHTML = question.textContent.substring(0, question.textContent.length - 1)
                        }
                        setTimeout(() => TypeWriter._write(quoteIndex, quoteCharacterIndex, isClearing, isAnswer), 25)
                        } else {
                          // Reset if everything is cleared, then loop all over again
                          quoteIndex = (quoteIndex + 1) % TypeWriter._quotes.length
                          quoteCharacterIndex = 0
                          isClearing = false
                          isAnswer = false
                          setTimeout(() => TypeWriter._write(quoteIndex, quoteCharacterIndex, isClearing, isAnswer), 1500)
                        }
                      }
                    }

                    /**
                    * Starts the typing effect.
                    */
                    static initialize () {
                      setTimeout(() => TypeWriter._write(0, 0, false, false), 3000)
                    }
                  }

                  TypeWriter.initialize()

                  class TypeWriter1 {
                    static get _quotes () {
                      return [
                      `I am also very much into Astrophysics|And I Think String Theory is Trash`
                      ]
                    }

                    static _write (quoteIndex, quoteCharacterIndex, isClearing, isAnswer) {
                      let question = document.querySelector('.question1')
                      let answer = document.querySelector('.answer1')
                      let quote = TypeWriter1._quotes[quoteIndex]

                      // Determine if characters were being written or cleared
                      if (!isClearing) {
                        // Every single character will be written until there's none left
                        if (quoteCharacterIndex < quote.length) {
                          // The pipe '|' indicates that the next chars are for answer
                          if (quote.charAt(quoteCharacterIndex) === '|') {
                            isAnswer = true
                            quoteCharacterIndex++
                            setTimeout(() => TypeWriter1._write(quoteIndex, quoteCharacterIndex, isClearing, isAnswer), 1000)
                            } else {
                              // Continue writing each character here
                              if (isAnswer) {
                                question.classList.remove('caret1')
                                answer.classList.add('caret1')
                                answer.innerHTML = answer.textContent + quote.charAt(quoteCharacterIndex)
                                } else {
                                  answer.classList.remove('caret1')
                                  question.classList.add('caret1')
                                  question.innerHTML = question.textContent + quote.charAt(quoteCharacterIndex)
                                }
                                quoteCharacterIndex++
                                setTimeout(() => TypeWriter1._write(quoteIndex, quoteCharacterIndex, isClearing, isAnswer), 75)
                              }
                              } else if (quoteCharacterIndex === quote.length) {
                                // If all characters were written out, then clear them
                                isClearing = true
                                setTimeout(() => TypeWriter1._write(quoteIndex, quoteCharacterIndex, isClearing, isAnswer), 3000)
                              }
                              } else {
                                // Continue clearing characters here
                                if (question.textContent.length > 0 || answer.textContent.length > 0) {
                                  if (answer.textContent.length > 0) {
                                    answer.innerHTML = answer.textContent.substring(0, answer.textContent.length - 1)
                                    } else if (question.textContent.length > 0) {
                                      answer.classList.remove('caret1')
                                      question.classList.add('caret1')
                                      question.innerHTML = question.textContent.substring(0, question.textContent.length - 1)
                                    }
                                    setTimeout(() => TypeWriter1._write(quoteIndex, quoteCharacterIndex, isClearing, isAnswer), 25)
                                    } else {
                                      // Reset if everything is cleared, then loop all over again
                                      quoteIndex = (quoteIndex + 1) % TypeWriter1._quotes.length
                                      quoteCharacterIndex = 0
                                      isClearing = false
                                      isAnswer = false
                                      setTimeout(() => TypeWriter1._write(quoteIndex, quoteCharacterIndex, isClearing, isAnswer), 1500)
                                    }
                                  }
                                }

                                /**
                                * Starts the typing effect.
                                */
                                static initialize () {
                                  setTimeout(() => TypeWriter1._write(0, 0, false, false), 2000)
                                }
                              }

                              TypeWriter1.initialize()
