const ProductId = `
<main>
    <% if(product) { %>
        <div style="display: flex;">
            <div style="border: 1px solid black;margin: 1em;">
                <img width="300" height="300" src="<%= product.image %>" alt="">
            </div>
            <div>
                <div>
                    <%= product.name %>
                </div>
                <div>
                    <%= product.detail %>
                </div>
                <div>
                    <button>buy $<%= product.price %></button>
                </div>
            </div>
        </div>
        <% } else { %>
            <h1>Not found product</h1>
            <% } %>
</main>`;

export default ProductId;
