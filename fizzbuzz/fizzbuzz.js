function fizzbuzz(n) {
  return [String(n), "fizz", "buzz", "fizzbuzz"][
    Number(n % 3 === 0) + (2 * Number(n % 5 === 0))
  ];
}

module.exports = fizzbuzz