![](./logo.png)

# Gusto. Extremely fast sentiment analysis based on AFINN-165 with zero dependencies

Gusto is a sentiment analysis library that aims to outperform any existing implementations. Based on the afinn work by fnielsen. Gusto is more than <strong>5</strong> times faster than alternative libraries.

## Performance comparison with other libraries
Run on a 2015 macbook pro 13"
```bash
sentiment (5.0.2) - Short  x 631,303 ops/sec ±0.96% (91 runs sampled)
Sentimental (1.0.1) - Short x 370,163 ops/sec ±0.85% (87 runs sampled)
Gusto short x 3,292,770 ops/sec ±0.76% (95 runs sampled)
Fastest is Gusto short
sentiment (5.0.2) - Long   x 3,030 ops/sec ±2.56% (93 runs sampled)
Sentimental (1.0.1) - Long  x 1,726 ops/sec ±1.58% (92 runs sampled)
Gusto long x 15,311 ops/sec ±3.52% (90 runs sampled)
Fastest is Gusto long
```

## References
- All credit for the AFINN list go to fnielsen
- https://github.com/fnielsen/afinn

