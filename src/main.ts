import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="fixed bottom-0 right-0">
    <div class="h-[400px] w-[400px] bg-blue-400 content-end">
      <p class="text-blue-500">test</p>
    </div>
  </div>
`;

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
