# Model used by this trial page

Converted from [tarteel-ai/whisper-base-ar-quran](https://huggingface.co/tarteel-ai/whisper-base-ar-quran)
(Apache License 2.0, copy in `LICENSE`), itself fine-tuned from
[openai/whisper-base](https://huggingface.co/openai/whisper-base) (Apache License 2.0).

Changes made: exported to ONNX with Hugging Face Optimum, and the weights
quantized to 8-bit integers with ONNX Runtime so the model can run in a phone's
browser. `generation_config.json` is taken from openai/whisper-base, since the
fine-tune predates Whisper's language and task settings.

The page loads Transformers.js 4.3.2 (Apache-2.0) and ONNX Runtime Web (MIT)
from the jsDelivr CDN.
