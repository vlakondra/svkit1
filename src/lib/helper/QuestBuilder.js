export function parseQuestions(text) {
    return text
      .split(/\r?\n\r?\n/) // Разделяем по признаку "последний вар-т ответа - пустая стр."
      .map(block => {
        const lines = block.split(/\r?\n/).filter(line => line.trim() !== '');
        //if (lines.length < 2) return null; // Маловероятно
        
        return {
          question: lines[0].trim(),
          answers: lines.slice(1).map(line => line.trim())
        };
      })
      //.filter(Boolean); // Удаляем пустые элементы
  }